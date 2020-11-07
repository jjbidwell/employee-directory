import React from "react";
import axios from "axios";

export default {
  fillPage: function() {
   return axios.get('https://randomuser.me/api/?seed=123?inc=email,id,name&results=50');
    }
}
