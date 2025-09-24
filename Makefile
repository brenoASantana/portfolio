# Makefile para projeto ReactJS

install:
	npm install

start:
	npm start

build:
	npm run build

test:
	npm test

lint:
	npm run lint || echo "Lint não configurado."

clean:
	rm -rf build node_modules

.PHONY: install start build test lint clean
