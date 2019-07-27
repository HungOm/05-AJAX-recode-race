class ApplicationController < Sinatra::Base

  register Sinatra::ActiveRecordExtension

  configure do
  	set :views, "app/views"
    set :public_dir, "public"
    #enables sessions as per Sinatra's docs. Session_secret is meant to encript the session id so that users cannot create a fake session_id to hack into your site without logging in. 
    enable :sessions
    set :session_secret, "secret"
  end
  helpers do

    # def new_session?


    # end


  end

  get '/' do
    
    erb :home
  end
  
  # temporary path
  get '/results' do
    erb :result
  end
  get '/game' do
    erb :index
  end
  # ==============

  post '/start' do 
    session_token= Session.generate_session_id
    # byebug
    session[:id] ||= session_token
    @session = Session.find_or_create_by(session_token:session[:id]) 
    @player1 = Player.find_or_create_by(name:params["player1"])
    @player2 = Player.find_or_create_by(name:params["player2"])
    @game = Game.find_or_create_by(session_id:session[:id],player_one:@player1.id,player_two:@player2,status:"started")

    # byebug


    erb :index

  end



  get '/sessions', provides: [:json] do
    @sessions = Session.all.to_json
  end

  get '/sessions/:id/games', provides: [:json] do
    @games = Games.where(session_id:params[:id]).to_json
  end

  get '/games/:id/results', provides: [:json] do
    @results = Game.where(id:params[:id]).to_json
  end

  post '/sessions/:id/games', provides: [:json] do

  end

  patch '/games/:id/finish', provides: [:json] do

  end
end
