import React from "react";
import $ from "jquery";

function API () {
    $.ajax({
        url: 'https://randomuser.me/api/?results=50',
        dataType: 'json',
        success: function(data) {
          console.log(data);
        }
      }).then(res => {
          console.log(res);
      });
}

export default API;