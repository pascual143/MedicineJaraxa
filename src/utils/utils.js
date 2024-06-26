export const fetchDataCard = async (setLoading, setError, setData) => {
    setLoading(true);
    setError("");
    try {
        const response = await fetch('https://api.fda.gov/drug/drugsfda.json?search=products.brand_name:*');
        const responseJson = await response.json();
        if (responseJson.results) {
            setData(responseJson.results);
        } else {
            setData([]);
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
        setError(error.message || "Something went wrong while fetching data");
    } finally {
        setLoading(false);
    }
};
