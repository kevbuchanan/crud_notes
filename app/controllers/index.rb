get '/' do
  @notes = Note.order("created_at DESC")
  erb :index
end

get '/create' do
  erb :_create, layout: !request.xhr?
end

get '/edit/:id' do
  @note = Note.find(params[:id])
  erb :_edit, layout: !request.xhr?
end

get '/delete/:id' do
  @note = Note.find(params[:id])
  erb :_delete, layout: !request.xhr?
end

post '/create' do
  @note = Note.new(params[:note])
  if @note.valid?
    @note.save
    if request.xhr?
      erb :_note, layout: false, locals: {note: @note}
    else
      redirect to('/')
    end
  else
    erb :_create, layout: !request.xhr?
  end
end

post '/edit/:id' do
  @note = Note.find(params[:id])
  @note.update_attributes(params[:note])
  redirect to('/')
end

post '/delete/:id' do
  Note.destroy(params[:id])
  redirect to('/') unless request.xhr?
end


