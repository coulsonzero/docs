# Dva

:::: code-group
::: code-group-item Com.jsx
```jsx
import { connect } from 'dva'

@connect(({ irrexport, loading }) => ({
  irrexport,
  loading: loading.models.irrexport,
}))
class Com extends React.Component {

}
```
:::
::: code-group-item models/deal.js
```js
import { BPMOutPutMyProject } from '@/services/BPM';

export default {
    namespace: 'deal',
    state: {
        tgroups:[],
        tgroupmap: {}
    }
    effects: {
        *outputfetch({ payload }, { call, put }) {
            // 获取最新数据
            yield put({
                type: 'add',
                payload: response,
            });
            const response = yield call(BPMOutPutMyProject, payload);
            if (response) {
                yield put({
                    type: 'savealluser',
                    payload: response,
                });
            }
        }
    }
    reducers: {
        add(state, action) {
            let groupmap = {}

            action.payload.map((item)=>{
                groupmap[item.id]= item.name
                if(item.child_group)
                {
                item.child_group.map((citem)=>{
                    groupmap[citem.id] = citem.name
                })
                }
            })

            return {
                ...state,
                tgroups: action.payload,
                tgroupmap: groupmap
            }
        }
    }
}
```
:::
::: code-group-item services/BPM.js
```js
import request from '@/utils/request';
import { getToken } from '../utils/authority';

export async function BPMPutCheck(params) {
  let tokenobj = getToken();
  if (tokenobj.outtime) {
    return;
  }

  return request('/bp_server/api/v2/lp/checklist/' + params.cid + '/' + params.eid, {
    method: 'PUT',
    headers: {
      Authorization: tokenobj.token,
    },
    body: params.values,
  });
}

export async function BPMGetNewsList(params) {
  let tokenobj = getToken();
  if (tokenobj.outtime) {
    return;
  }

  return request('/bp_server/api/v2/statistics/xwlb', {
    method: 'POST',
    headers: {
      Authorization: tokenobj.token,
    },
    body: params.values,
  });
}
```
:::
::: code-group-item authority.js
```js
import { message } from 'antd';
import { stringify } from 'qs';
import { BPMLogin } from '@/services/BPM';


// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority(str) {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  const authorityString =
    typeof str === 'undefined' ? localStorage.getItem('antd-pro-authority') : str;
  // authorityString could be admin, "admin", ["admin"]
  let authority;
  try {
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  return authority || ['admin'];
}

export function setAuthority(authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  return localStorage.setItem('antd-pro-authority', JSON.stringify(proAuthority));
}


export function getToken() {
  let user = JSON.parse(localStorage.getItem('bpmuser'));
  if(user != null && user.auth_token_datas != undefined)
  {

    const nowtime = (new Date()).getTime();

    if(nowtime - user.logintime > 604600000)
    //if(nowtime - user.logintime > 1000)
    {
      //console.log(111);

      window.g_app._store.dispatch({
        type: 'login/relogout',
      });

      return {
        outtime: true,
        rstoken: user.auth_token_datas.refresh_token,
        token: user.auth_token_datas.access_token
      };


    }
    else
    {
      return {
        outtime: false,
        rstoken: user.auth_token_datas.refresh_token,
        token: user.auth_token_datas.access_token
      }
    }

  }
  else
  {
    message.error('认证失效，请重新登录');

    window.g_app._store.dispatch({
      type: 'login/logout',
    });

    //router.push('/user/login');
    return {
      token: ''
    };
  }


  //return JSON.parse(localStorage.getItem('bpmuser')).token;
}

export function setUserInfo(info) {
  //console.log(info);
  return localStorage.setItem('bpmuser', JSON.stringify(info));

}

export function getUserInfo()
{
  let user = JSON.parse(localStorage.getItem('bpmuser'));
  if(user != null) {
    return user;
  } else {
    message.error('认证失效，请重新登录');
    window.g_app._store.dispatch({
      type: 'login/logout',
    });
    return {};
  }
}

export function setfilter(filter) {

  return localStorage.setItem('bpmfilter', JSON.stringify(filter));

}

export function getfilter() {
  let filter = JSON.parse(localStorage.getItem('bpmfilter'));
  if(filter == null)
  {
    return {};
  }
  else
  {
    return filter;
  }

}

export function getAuths() {

  let user = JSON.parse(localStorage.getItem('bpmuser'));
  if(user != null && user.permission_list != undefined)
  {
    return user.permission_list;
  }
  else
  {
    return [];
  }
}

```
:::
::::