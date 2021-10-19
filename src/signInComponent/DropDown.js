import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

function DropDown({ image, code }) {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          //   rel="noopener noreferrer"
          href={image}
          download="image"
        >
          Download image
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={code}
          download="code"
        >
          Download code
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomCenter" arrow>
      {/* <a
        // style={{ color: "black", position: "fixed", top: "10px", left: "10px" }}
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
      >
        Hover me <DownOutlined />
      </a> */}
      <Button>Hover Me</Button>
    </Dropdown>
  );
}

export default DropDown;
