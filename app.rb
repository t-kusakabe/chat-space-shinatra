require 'sinatra'
require 'sinatra/contrib'
require 'haml'
require 'active_support/all'

get '/' do
  haml :'groups/index'
end
