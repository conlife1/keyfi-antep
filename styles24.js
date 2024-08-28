body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
}

.timeline {
    position: relative;
    width: 80%;
    margin: 50px auto;
}

.timeline::before {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #333;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
}

.timeline-item {
    padding: 10px 40px;
    position: relative;
    width: 50%;
}

.timeline-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    cursor: pointer;
}

.timeline-item .arrow {
    font-size: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.timeline-item.left {
    left: 0;
    text-align: right;
}

.timeline-item.right {
    left: 50%;
}

.timeline-item.right .arrow {
    right: 10px;
}

.timeline-item.left .arrow {
    left: 10px;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.8);
}

.modal-content {
    margin: auto;
    display: block;
    width: 60%;
    max-width: 700px;
}

.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover {
    color: #bbb;
    text-decoration: none;
}

#modal-caption {
    margin: auto;
    display: block;
    text-align: center;
    color: #fff;
    padding: 10px 20px;
    max-width: 700px;
    font-size: 18px;
}
