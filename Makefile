
push:
	@git add .
	@git commit -m "update $(commit)"
	@git pull origin master
	@git push origin master

deploy:
	@bash deploy.sh

