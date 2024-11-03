export function Input()
{
    return (
        <div className="mb-3 row">
            <label htmlFor="inputProductName" className="col-sm-2 col-form-label">Product Name</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="inputProductName" ref={formRefs.productName} />
            </div>
        </div>
    );
}