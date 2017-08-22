require 'sinatra'
require 'sinatra/contrib'
require 'haml'
require 'active_support/all'

require_relative 'controller/group.rb'

get '/' do
  haml :'groups/index'
end
