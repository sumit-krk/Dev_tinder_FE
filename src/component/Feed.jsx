import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
    const dispatch = useDispatch();
    const feed = useSelector((state) => state.feedState);
    const getFeed = async () => {
        try {
            const res = await axios.get(BASE_URL + "/feed", {
                withCredentials: true
            });
            dispatch(addFeed(res.data));
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getFeed();
    }, [])
    return (
        feed && (
            <div className="flex justify-center my-10">
              <UserCard user={feed[0]} />
            </div>
          )
    )
       
}
export default Feed