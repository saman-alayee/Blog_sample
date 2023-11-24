type navItem = {
  navItem: string,
  link: string
}

type voidFunc = () => void
type argStr = (arg:string) => void


type ChangeActive = {
  activeItem: string,
  change: (arg: string) => void,
}

type blogCard = {
  label: string,
  icon: React.JSX.Element,
  bgGradiant: string
}
type loginFormValues = {
  name: string,
  email: string,
  password: string
}




type movie = {
  id: number,
  title: string,
  poster: string,
  year: string,
  rated: string,
  released: string,
  runtime: string,
  director: string,
  writer: string,
  actors: string,
  plot: string,
  country: string,
  awards: string,
  metascore: string,
  imdb_rating: string,
  imdb_votes: string,
  imdb_id: string,
  type: string,
  genres: string[],
  images: string[]
}
type fetchdatatype = {
  data: { data: movie[] },
  metadata: object
}

type routeRequest = {
  title?: string
  userId?: number
  id?: number
  completed?: boolean
}