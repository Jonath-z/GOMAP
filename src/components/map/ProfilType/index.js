import React from 'react'

const ProfilType = () => {
    return (
        <div>
            <div>
                <label for="traffic">Traffic</label>
                <input type="checkbox" value="traffic" name="traffic" />
            </div>
            <div>
                <label for="driving">Driving</label>
                <input type="checkbox" value="driving" name="driving" />
            </div>
            <div>
                <label for="walking">Walking</label>
                <input type="checkbox" value="walking" name="walking" />
            </div>
            <div>
                <label for="cycling">Cycling</label>
                <input type="checkbox" value="cycling" name="cycling" />
            </div>
        </div>
    );
}

export default ProfilType