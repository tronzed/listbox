import { useRef, useState } from "react";
import { toJpeg } from "html-to-image";
export const Home = () => {

    const ref = useRef();

    const download = async () => {
        await new Promise((res) => setTimeout(res, 300)); // wait for render

        const dataUrl = await toJpeg(ref.current, { quality: 1 });

        const link = document.createElement("a");
        link.download = "list.jpg";
        link.href = dataUrl;
        link.click();
    };


    const listData = [
        { name: 'Namak (Salt)', qty: 1 },
        { name: 'Lal Mirch Powder' },
        { name: 'Haldi Powder' },
        { name: 'Jeera ' },
        { name: 'Dhaniya Powder' },
        { name: 'Garam Masala' },
        { name: 'Atta' },
        { name: 'Chawal' },
        { name: 'Dal ' },
        { name: 'Sarson Tel ' },
        { name: 'Sugar ' },
        { name: 'Tea ' },
        { name: 'Milk ' },
        { name: 'Onion ' },
        { name: 'Potato ' }
    ];

    const [qtyBox, setQtyBox] = useState({});
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
                                    listData?.map((item, key) => {


                                        return (
                                            <>
                                                <li className={addedList?.some((e) => e.name === item?.name) ? 'active_item' : "none"}>
                                                    <span className="item_name">{item?.name}</span>
                                                    <div className="item_tool_box">
                                                        <input

                                                            value={qtyBox[item.name] || ""}
                                                            onChange={(e) =>
                                                                setQtyBox({
                                                                    ...qtyBox,
                                                                    [item.name]: e.target.value
                                                                })
                                                            }
                                                            className="qty_item"
                                                            type="number"
                                                            step="0.5"
                                                        />
                                                        <button
                                                            className="add_btn"
                                                            onClick={() => {
                                                                const qty = qtyBox[item.name] || 1;
                                                                setAddedList((prev) => [...prev, { name: item?.name,qty }]);
                                                            }}
                                                        >
                                                            Add
                                                        </button>
                                                        <button
                                                            className="remove_btn"
                                                            onClick={() => {
                                                                setAddedList((prev) => prev.filter((val) => val.name !== item?.name));
                                                            }}
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                {addedList?.length ? (


                    <div className="bottom_fix_footer">
                        <div className="bottom_view_box">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">See List</button>
                        </div>
                    </div>


                ) : ""}


                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Your Shoping List
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div ref={ref} className="modal-body">
                                <div className="inner_content">
                                    {
                                        addedList?.map((item, key) => (
                                            <>
                                                <p key={key}>
                                                    <span>{item?.name}</span>
                                                    <span>{item?.qty}{item?.qty <= 90  ? " Kg":" Gram" }</span>
                                                </p>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button onClick={download} type="button" className="btn btn-primary">
                                    Download list
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        </>
    );
}