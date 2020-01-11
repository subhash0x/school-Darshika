import React from "react";
import { Button, Dropdown, Menu, Icon } from "antd"
import { withLocalize } from "react-localize-redux";


const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => {
    const menu = (
      <Menu>
          {
              languages.map(lang => (
                  <Menu.Item onClick={() => setActiveLanguage(lang.code)}>
                      {lang.name}
                  </Menu.Item>
              ))
          }
      </Menu>
    );

    return (<Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          Change Lang <Icon type="down" />
        </a>
    </Dropdown>)
};

export default withLocalize(LanguageToggle);