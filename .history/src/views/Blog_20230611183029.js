import useFetch from "../customize/Fetch";

const Blog = () => {
    const { data: dataUsers, loading } = useFetch('https://reqres.in/api/users?page=2', false)
    console.log(">>>check", dataUsers)
    return (
        <div>Thuc</div>
    )
}

export { Blog };