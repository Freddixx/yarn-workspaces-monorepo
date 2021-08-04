build:
	docker build -t greeter-service -f ./packages/greeter-service/Dockerfile .

run:
	docker run -p 3000:3000 -d -t greeter-service