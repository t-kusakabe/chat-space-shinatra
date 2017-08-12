require 'sinatra'
require 'sinatra/contrib'
require 'haml'

get '/' do
  haml :index
end
