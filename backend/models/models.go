package models

import "time"

type Task struct {
	ID          int
	Name        string
	IsCompleted bool
	CreatedAt   time.Time
}
