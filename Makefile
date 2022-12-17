DOCKER_COMPOSE = docker-compose exec eaaldark

bash:
	${DOCKER_COMPOSE} /bin/bash

run-install:
	${DOCKER_COMPOSE} npm i

run-start:
	${DOCKER_COMPOSE} npm run start

run-build:
	${DOCKER_COMPOSE} npm run build

prettier:
	${DOCKER_COMPOSE} npx prettier --write .