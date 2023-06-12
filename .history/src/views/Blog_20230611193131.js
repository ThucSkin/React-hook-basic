import useFetch from "../customize/Fetch";

const Blog = () => {
    const { dataUsers: dataBlogs, isLoading, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
    let newData = [];

    console.log(dataBlogs)
    if (dataBlogs.length > 0 && dataBlogs) {
        newData = dataBlogs;
    }

    return (
        <>
            {newData && newData.length > 0 &&
                newData.map(item => {
                    <>
                        <div>{item.id}</div>
                        <div>{item.email}</div>
                    </>
                })}
        </>
    )
}

export { Blog };