import useFetch from "../customize/Fetch";

const Blog = () => {
    const { dataUsers: dataBlogs, loading } = useFetch('https://reqres.in/api/users?page=2', false)
    if (dataBlogs.length > 0 && dataBlogs) {
        let newData = dataBlogs;
    }

    return (
        <>
            {newData && newData.length > 0 &&
                newData.map(item => {

                })}
        </>
    )
}

export { Blog };