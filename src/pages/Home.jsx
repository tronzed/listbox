import { useState } from "react";

export const Home = () => {

    const listData = [
        { name: 'Food Item 01' },
        { name: 'Food Item 02' },
        { name: 'Food Item 03' },
        { name: 'Food Item 04' },
        { name: 'Food Item 05' },
        { name: 'Food Item 06' },
        { name: 'Food Item 07' },
        { name: 'Food Item 08' },
        { name: 'Food Item 09' }
    ]

    const [addedList, setAddedList] = useState([])

    return (
        <>

            {console.log(addedList)}

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
                                {
                                    listData?.map((item, key) => (
                                        <>
                                            <li className={addedList?.includes(item?.name) ? 'active_item' : ""}>
                                                <span className="item_name">{item?.name}</span>
                                                <div className="item_tool_box">
                                                    <input
                                                        className="qty_item"
                                                        type="number"
                                                        defaultValue={1}
                                                        step="0.5"
                                                    />
                                                    <button
                                                        onClick={() => {
                                                            setAddedList((prev) => [...new Set([...prev, item?.name])]);
                                                        }}
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            </li>
                                        </>
                                    ))
                                }
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