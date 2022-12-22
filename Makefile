
push:
	@git add .
	@git commit -m "update $(msg)"
	@git pull origin master
	@git push origin master

deploy:
	@bash deploy.sh

