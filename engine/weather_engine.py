import requests
from bs4 import BeautifulSoup as bs
import sys

city = sys.argv[1]


def get_weather(place):
    place = city.replace(" ", "-")
    url = "https://www.weather-forecast.com/locations/" + place + "/forecasts/latest"
    r = requests.get(url)
    soup = bs(r.content, "lxml")
    try:
        weather = soup.findAll("span", class_="phrase")[0].text
        return weather
    except:
        return


print(get_weather(city))
