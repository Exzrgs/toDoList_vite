package main

import (
	"log"
	"net/http"

	"github.com/Exzrgs/toDoList_vite/backend/routers"
)

func main() {
	r := routers.NewRouter()

	log.Println("server start at port 8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
