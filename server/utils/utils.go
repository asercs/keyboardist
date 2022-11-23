package utils

import "strconv"

//function that converts string into float64

func StringToFloat64(s string) float64 {
	f, _ := strconv.ParseFloat(s, 64)
	return f
}
