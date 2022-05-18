# Dva

## BPM

:::: code-group
::: code-group-item GET
```js{2,8-9}
/* 项目 IRR 筛选条件获取 */
export async function BPMGetFundIRR(params) {
  let tokenobj = getToken();
  if (tokenobj.outtime) {
    return;
  }

  return request('/bp_server/api/v3/funds/irr', {
    method: 'GET',
    headers: {
      Authorization: tokenobj.token,
    },
  });
}
```
:::
::: code-group-item POST
```js{2,8-9,13}
/* 项目 IRR 列表获取 */
export async function BPMPostFundIRR(params) {
  let tokenobj = getToken();
  if (tokenobj.outtime) {
    return;
  }

  return request('/bp_server/api/v3/funds/irr', {
    method: 'POST',
    headers: {
      Authorization: tokenobj.token,
    },
    body: params.values
  });
}
```
:::
::: code-group-item PUT
```js{8-9,13}
/* 预测XIRR参数设置 */
export async function BPMPutPredictXIRR(params) {
  let tokenobj = getToken();
  if (tokenobj.outtime) {
    return;
  }

  return request('/bp_server/api/v2/fund_predict/xirr', {
    method: 'PUT',
    headers: {
      Authorization: tokenobj.token,
    },
    body: params.values
  });
}
```
:::
::: code-group-item DELETE
```js{2,8-9}
/* 预测XIRR参数清除 */
export async function BPMDelPredictXIRR(params) {
  let tokenobj = getToken();
  if (tokenobj.outtime) {
    return;
  }

  return request('/bp_server/api/v2/fund_predict/xirr', {
    method: 'DELETE',
    headers: {
      Authorization: tokenobj.token,
    },
  });
}
```
:::
::::

## NameSpace
```js{1,7,10,22}
import { BPMOutPutMyProject, BPMPostFundIRR } from '@/services/BPM';
import { getUserInfo, getToken } from '@/utils/authority';

export default {
  namespace: 'irrexport',
  state: {
    irrData: [],
  },
  effects: {
    *getIrrlist({ payload }, { call, put}) {
      const response = yield call(BPMPostFundIRR, payload)
      // console.log(response)
      if (response) {
        yield put({
          type: 'getlist',
          payload: response,
      });
      }
    },
  },
  reducers: {
    getlist(state, action) {
      return {
        ...state,
        irrData: action.payload.list,
      };
    },
  }
}
```

## Dispatch

:::: code-group
::: code-group-item Com.jsx
```jsx{1,3,8}
import { connect } from 'dva'

@connect(({ irrexport, loading }) => ({
  irrexport,
  loading: loading.models.irrexport,
}))
export default class Demo extends React.Component {
  setCheckedFilter = value => {
    const { dispatch } = this.props;
    dispatch({
      type: 'irrexport/getIrrlist',
      payload: {
        values: value,
      },
    });
    // console.log(JSON.stringify(this.props.irrexport.irrData, null, 2));
  };
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


::::


## 示例

### GET请求

![Api接口](@/assets/react/dva/ApiInterface.png)
:::: code-group
::: code-group-item BPM.js
```js{11-12}
import request from '@/utils/request';
import { getToken } from '../utils/authority';

/* 项目 IRR 筛选条件获取 */
export async function BPMGetFundIRR(params) {
  let tokenobj = getToken();
  if (tokenobj.outtime) {
    return;
  }

  return request('/bp_server/api/v3/funds/irr', {
    method: 'GET',
    headers: {
      Authorization: tokenobj.token,
    },
  });
}
```
:::
::: code-group-item irrexport.js
```js{1,7,13,23}
import {BPMGetFundIRR} from '@/services/BPM';
import { getUserInfo, getToken } from '@/utils/authority';

export default {
  namespace: 'irrexport',
  state: {
    filterArr: [],
  },
  effects: {
    /**
     * 项目 IRR 筛选条件获取
     */
    *getFundIrr({ payload }, { call, put }) {
      const response = yield call(BPMGetFundIRR, payload);
      console.log(response)
      yield put({
        type: 'getfund',
        payload: response,
      });
    },
  },
  reducers: {
    getfund(state, action) {
      return {
        ...state,
        filterArr: action.payload,
      }
    }
  }
}
```
:::
::: code-group-item ProjectIRR.jsx
```jsx{19,30}
import React from 'react';
import { connect } from 'dva';


@connect(({ irrexport, loading }) => ({
  irrexport,
  loading: loading.models.irrexport,
}))
export default class ProjectIRR extends React.Component {
  state = {}

  componentDidMount() {
    this.getFundIrr();
  }

  /**
   * 获取接口数据
   */
  getFundIrr = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'irrexport/getFundIrr',
      payload: {}
    })
  }

  render() {
    console.clear()
    // 查看接口数据
    console.log(JSON.stringify(this.props.irrexport.filterArr, null, 2))
    return ()
  }
}
```
:::
::::

![接口返回的数据](@/assets/react/dva/InterfaceData.png)
![查看JSON接口数据](@/assets/react/dva/catJsonData.png)


### PUST请求

![POST Api请求](@/assets/react/dva/postApi.png)

:::: code-group
::: code-group-item BPM.js
```js
/* 项目 IRR 列表获取 */
export async function BPMPostFundIRR(params) {
  let tokenobj = getToken();
  if (tokenobj.outtime) {
    return;
  }

  return request('/bp_server/api/v3/funds/irr', {
    method: 'POST',
    headers: {
      Authorization: tokenobj.token,
    },
    body: params.values
  });
}
```
:::
::: code-group-item irrexport.js
```js
import { BPMPostFundIRR } from '@/services/BPM';
import { getUserInfo, getToken } from '@/utils/authority';


export default {
  namespace: 'irrexport',
  state: {
    query: [],
    irrData: [],
  },
  effects: {
    /**
     * 项目 IRR 列表获取
     */
    *getIrrlist({ payload }, { call, put }) {
      const response = yield call(BPMPostFundIRR, payload);
      // console.log(response)
      if (response) {
        yield put({
          type: 'getlist',
          payload: response,
        });
      }
    },
  },
  reducers: {
    getlist(state, action) {
      return {
        ...state,
        irrData: action.payload.list,
      };
    },
  }
}
```
:::
::: code-group-item ProjectIRR.jsx
```jsx
import React from 'react';
import { connect } from 'dva';


@connect(({ irrexport, loading }) => ({
  irrexport,
  loading: loading.models.irrexport,
}))
class ProjectIRR extends React.Component {
  state = {
  }

  componentDidMount() {
    console.clear();
    // 基金IRR列表数据
    this.handleFetch();
  }

  handleFetch = () => {
    const { dispatch } = this.props;
    // console.log(this.props.irrexport.irrData);
    dispatch({
      type: 'irrexport/getIrrlist',
      payload: {
        values: {
          query: {
            fund_name: [],
            partner: [],
            leader: [],
            primary_type_group: [],
            user_id: [],
          },
        },
      },
    });
  };

  render() {
    this.state.dataSource = this.props.irrexport.irrData;
    this.state.dataSource.forEach(item => (item.key = item._id));
    return ()
  }
}

export default ProjectIRR
```
:::
::::

![POST请求数据](@/assets/react/dva/postData.png)


### PUT请求

:::: code-group
::: code-group-item BPM.js
```js
/* 预测XIRR参数设置 */
export async function BPMPutPredictXIRR(params) {
  let tokenobj = getToken();
  if (tokenobj.outtime) {
    return;
  }

  return request('/bp_server/api/v2/fund_predict/xirr', {
    method: 'PUT',
    headers: {
      Authorization: tokenobj.token,
    },
    body: params.values
  });
}
```
:::
::: code-group-item irrexport.js
```js
import { BPMPutPredictXIRR } from '@/services/BPM';
import { getUserInfo, getToken } from '@/utils/authority';

export default {
  namespace: 'irrexport',
  state: {
    filterArr: [],
  },
  effects: {
    /**
     * 预测XIRR参数设置
     */
    *putPredictXIRR({ payload }, { call, put }) {
      const response = yield call(BPMPutPredictXIRR, payload);
      console.clear();
      console.log(response);
    },
  },
  reducers: {
  }
}

```
:::
::: code-group-item ProjectIRR.jsx
```jsx
import React from 'react';
import { connect } from 'dva';


@connect(({ irrexport, loading }) => ({
  irrexport,
  loading: loading.models.irrexport,
}))
export default class ProjectIRR extends React.Component {
  state = {}

  componentDidMount() {
    this.putPredictXIRR();
  }

  /**
   * 预测XIRR参数设置
   * @param {project_id, fund_name, amount, predict_date}
   */
  putPredictXIRR = () => {
    let data = {
      project_id: '6221b62399a5d8002061513b',
      fund_name: 'Fund V',
      amount: 123,
      predict_date: '2022-06-30',
    };
    const { dispatch } = this.props;
    dispatch({
      type: 'irrexport/putPredictXIRR',
      payload: {
        values: data,
      },
    });
  };

  render() {
    return ()
  }
}

export default ProjectIRR
```
:::
::::


### DELETE请求

![DELETE Api文档](@/assets/react/dva/deleteApi.png)

:::: code-group
::: code-group-item BPM.js
```js
/* 预测XIRR参数清除 */
export async function BPMDelPredictXIRR(params) {
  let tokenobj = getToken();
  if (tokenobj.outtime) {
    return;
  }

  return request('/bp_server/api/v2/fund_predict/xirr', {
    method: 'DELETE',
    headers: {
      Authorization: tokenobj.token,
    },
  });
}
```
:::
::: code-group-item irrexport.js
```js
export default {
  namespace: 'irrexport',
  state: {
    query: [],
    irrData: [],
  },
  effects: {
    /**
     * 预测XIRR参数清除
     */
    *delPredictXIRR({ payload }, { call, put }) {
      const response = yield call(BPMDelPredictXIRR, payload);
      console.log(response);
    },
  },
  reducers: {
  }
}
```
:::
::: code-group-item ProjectIRR.jsx
```jsx
import React from 'react';
import { connect } from 'dva';


@connect(({ irrexport, loading }) => ({
  irrexport,
  loading: loading.models.irrexport,
}))
class ProjectIRR extends React.Component {
  state = {
  }

  componentDidMount() {
    console.clear();
    // 基金IRR列表数据
    this.delPredictXIRR();
  }

  // 预测XIRR参数清除
  delPredictXIRR = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'irrexport/delPredictXIRR',
      payload: {},
    });
  };

  render() {
    return ()
  }
}

export default ProjectIRR
```
:::
::::

![DELETE请求数据](@/assets/react/dva/deleteData.png)

## FAQ

### message: "Failed to decode JSON object: Expecting value: line 1 column 1 (char 0)"

> 缺少body请求参数

```js{7}
  // 项目 IRR 选定项目计算 XIRR
  postCalcXIRR = (value) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'irrexport/postCalcXIRR',
      payload: {
        values: value,
      },
    });
  };

  componentDidMount() {
    // 请求示例
    let data = {
      projects: {
        '5d11ead05f627d60a07b7e79': ['Fund I', 'RMB Fund I(SH)'],
        '5db7cd325f627d4162b0d884': ['Fund I', '广州学行', 'RMB Fund I(BJ)'],
      },
      dates: {
        fmv: '2021-Q1',
        fmpv: ['2022-06-30', '2022-05-02', '2022-03-28', '2021-12-30'],
      },
    };
    // 项目 IRR 选定项目计算 XIRR
    this.postCalcXIRR(data);
  }
```



### msg: 页面不存在

![页面不存在](@/assets/react/dva/params.png)

```js{9}
/* 预测XIRR参数清除 */
export async function BPMDelPredictXIRR(params) {
  let tokenobj = getToken();
  if (tokenobj.outtime) {
    return;
  }

  // return request('/bp_server/api/v2/fund_predict/xirr' + params.id, {
  return request('/bp_server/api/v2/fund_predict/xirr', {
    method: 'DELETE',
    headers: {
      Authorization: tokenobj.token,
    },
  });
}
```

### message: {project_id: "Missing required parameter in the JSON body or the post body or the query string"}
