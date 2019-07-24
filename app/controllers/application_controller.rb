class ApplicationController < Sinatra::Base

  register Sinatra::ActiveRecordExtension

  configure do
  	set :views, "app/views"
    set :public_dir, "public"
    #enables sessions as per Sinatra's docs. Session_secret is meant to encript the session id so that users cannot create a fake session_id to hack into your site without logging in. 
    enable :sessions
    set :session_secret, "secret"
  end

  get '/' do

  end

  post '/sessions', provides: [:json] do

  end

  get '/sessions/:id/games', provides: [:json] do

  end

  get '/games/:id/results', provides: [:json] do

  end

  post '/sessions/:id/games', provides: [:json] do

  end

  patch '/games/:id/finish', provides: [:json] do

  end
end

