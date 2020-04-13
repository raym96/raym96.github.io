#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Apr 12 14:41:12 2020

@author: raymondji
"""


from flask import Flask, render_template
app = Flask(__name__)

app.static_folder = 'static'

@app.route('/')
@app.route('/index.html')
def home():
    return render_template('index.html')

@app.route('/experience.html')
def about():
    return render_template('experience.html', title = 'About')

@app.route('/portfolio.html')
def portfolio():
    return render_template('portfolio.html', title = 'Portfolio')

if __name__ == '__main__':
    app.run(debug = True)