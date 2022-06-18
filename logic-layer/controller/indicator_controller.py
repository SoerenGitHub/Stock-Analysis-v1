import json
from flask import request, Response
from .app_controller import api, error_response
from extern_data import Stock
from indicator import Indicator, IndicatorFactory
from flask_restful import Resource

#https://stackoverflow.com/questions/57664997/how-to-return-400-bad-request-on-flask

class IndicatorController(Resource):
  
  def __init__(self):
    self.factory = IndicatorFactory()
  
  def get(self, symbol, indicator):    
    stock = Stock('Stock', symbol)
    stock.request_history()
    
    indicator = self.factory.create(indicator)
    
    if(indicator != None):
      result = indicator.get_result(stock.get_history(), request.args).to_json(orient="table")
      return Response(result, mimetype='application/json')
    else:
      return error_response('Indicator not found', 404)
    
api.add_resource(IndicatorController, '/stocks/<string:symbol>/indicators/<string:indicator>')