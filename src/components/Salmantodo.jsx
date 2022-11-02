import React from "react";
export const SalmanTodo=()=>{
    return(
        <React.Fragment>
            <h1>SalmanTask</h1>
            <div className="Main">
                
                <div className="Sub">
                <h1 id="hd1">Load User Refrence</h1>
                </div>
                <label>Select Font-Size: </label>
                <select>
                    <option value="16px" >16px</option>
                    <option  value="20px" >20px</option>
                    <option value="24px" >24px</option>
                    <option value="18px" >18px</option>
                </select>
                <label >Select Background-color:</label>
                <select>
                    <option value="aqua">aqua</option>
                    <option value="orange">orange</option>
                    <option value="skyblue">skyblue</option>
                    <option value="pink">pink</option>
                    <option value="greeen">green</option>
                </select>
                <div>
                    <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Dolorem ipsum libero quibusdam natus mollitia, hic recusandae laudantium <br />
                        tempore architecto adipisci neque saepe ducimus consequatur ratione perspiciatis <br />
                         voluptatem vitae dolores a cum voluptates aperiam asperiores quos. Sed eum porro,<br />
                          aperiam necessitatibus inventore impedit, repellendus suscipit iusto vitae neque <br />
                          consequatur nostrum quisquam.
                    </pre>
                    <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Dolorem ipsum libero quibusdam natus mollitia, hic recusandae laudantium <br />
                        tempore architecto adipisci neque saepe ducimus consequatur ratione perspiciatis <br />
                         voluptatem vitae dolores a cum voluptates aperiam asperiores quos. Sed eum porro,<br />
                          aperiam necessitatibus inventore impedit, repellendus suscipit iusto vitae neque <br />
                          consequatur nostrum quisquam.
                    </pre>
                </div>

            </div>
           
        </React.Fragment>
    )
}