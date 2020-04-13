#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Apr 12 16:13:24 2020

@author: raymondji
"""

from flask_frozen import Freezer
from flask_app import app

freezer = Freezer(app)

if __name__ == '__main__':
    freezer.freeze()