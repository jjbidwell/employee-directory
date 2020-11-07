import React from "react";
import axios from "axios";

export default {
  fillPage: function() {
   return axios.get('https://randomuser.me/api/?seed=35425&results=50');
    }
}
