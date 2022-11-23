FROM golang:1.19-alpine

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY . ./

RUN go build -o /go-docker-demo

EXPOSE 8000

CMD [ "/go-docker-demo" ]