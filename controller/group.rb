get '/groups' do
  haml :'/groups/index'
end

get '/groups/new' do
  haml :'/groups/new'
end
