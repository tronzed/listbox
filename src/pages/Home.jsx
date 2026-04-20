

export const Home = () => {

    return (

        <>

            <>
                <div className="container list_cover">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="logo_box">
                                <h1>List Box</h1>
                            </div>
                            <div className="top_toolbar_cover hide_me">
                                <div className="leng_box">
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexSwitchCheckDefault"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckDefault"
                                        >
                                            English
                                        </label>
                                    </div>
                                </div>
                                <div className="add_more_item">
                                    <button type="button" className="btn btn-light">
                                        Add
                                    </button>
                                </div>
                            </div>
                            <ul className="item_name_box">
                                <li>
                                    <span className="item_name">Food Item 01</span>
                                    <div className="item_tool_box">
                                        <input
                                            className="qty_item"
                                            type="number"
                                            defaultValue={1}
                                            step="0.5"
                                        />
                                        <button>Add</button>
                                    </div>
                                </li>
                                <li className="active_item">
                                    <span className="item_name">Food Item 02</span>
                                    <div className="item_tool_box">
                                        <input
                                            className="qty_item"
                                            type="number"
                                            defaultValue={1}
                                            step="0.5"
                                        />
                                        <button>Add</button>
                                    </div>
                                </li>
                                <li>
                                    <span className="item_name">Food Item 03</span>
                                    <div className="item_tool_box">
                                        <input
                                            className="qty_item"
                                            type="number"
                                            defaultValue={1}
                                            step="0.5"
                                        />
                                        <button>Add</button>
                                    </div>
                                </li>
                                <li>
                                    <span className="item_name">Food Item 04</span>
                                    <div className="item_tool_box">
                                        <input
                                            className="qty_item"
                                            type="number"
                                            defaultValue={1}
                                            step="0.5"
                                        />
                                        <button>Add</button>
                                    </div>
                                </li>
                                <li>
                                    <span className="item_name">Food Item 05</span>
                                    <div className="item_tool_box">
                                        <input
                                            className="qty_item"
                                            type="number"
                                            defaultValue={1}
                                            step="0.5"
                                        />
                                        <button>Add</button>
                                    </div>
                                </li>
                                <li>
                                    <span className="item_name">Food Item 06</span>
                                    <div className="item_tool_box">
                                        <input
                                            className="qty_item"
                                            type="number"
                                            defaultValue={1}
                                            step="0.5"
                                        />
                                        <button>Add</button>
                                    </div>
                                </li>
                                <li>
                                    <span className="item_name">Food Item 07</span>
                                    <div className="item_tool_box">
                                        <input
                                            className="qty_item"
                                            type="number"
                                            defaultValue={1}
                                            step="0.5"
                                        />
                                        <button>Add</button>
                                    </div>
                                </li>
                                <li>
                                    <span className="item_name">Food Item 08</span>
                                    <div className="item_tool_box">
                                        <input
                                            className="qty_item"
                                            type="number"
                                            defaultValue={1}
                                            step="0.5"
                                        />
                                        <button>Add</button>
                                    </div>
                                </li>
                                <li>
                                    <span className="item_name">Food Item 09</span>
                                    <div className="item_tool_box">
                                        <input
                                            className="qty_item"
                                            type="number"
                                            defaultValue={1}
                                            step="0.5"
                                        />
                                        <button>Add</button>
                                    </div>
                                </li>
                                <li>
                                    <span className="item_name">Food Item 10</span>
                                    <div className="item_tool_box">
                                        <input
                                            className="qty_item"
                                            type="number"
                                            defaultValue={1}
                                            step="0.5"
                                        />
                                        <button>Add</button>
                                    </div>
                                </li>
                                <li>
                                    <span className="item_name">Food Item 11</span>
                                    <div className="item_tool_box">
                                        <input
                                            className="qty_item"
                                            type="number"
                                            defaultValue={1}
                                            step="0.5"
                                        />
                                        <button>Add</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom_submit_box">
                    <button>Submit</button>
                </div>
            </>


        </>

    );

}