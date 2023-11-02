type navItem={
    navItem:string,
    link:string
  }

  type voidFunc=()=>void

  type ChangeActive = {
    activeItem: string,
    change: (arg:string) => void,
}