import useFetch from "../customize/Fetch";

const Blog = () => {
    const { dataUsers, loading } = useFetch('https://reqres.in/api/users?page=1', true)

    return (
        <div>Thuc</div>
    )
}

export { Blog };