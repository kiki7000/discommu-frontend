import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Typography, Menu, Button, Drawer, Divider } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";


class NavBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            drawerOpen: false
        };
    }

    render () {
        return (
            <>
                <nav className="px-8 sm:px-16 border-b-1 border-solid border-gray-400 overflow-auto shadow overflow-y-hidden">
                    <div className="w-30 float-left mt-4 mb-3 mr-8 font-roboto">
                        <Link to="/">
                            <Typography.Title level={4}>DISCOMMU</Typography.Title>
                        </Link>
                    </div>

                    <div className="hidden sm:inline">
                        <div className="float-left mt-2">
                            <Menu mode="horizontal" className="border-b-0 h-14" inlineIndent={28}>
                                <Menu.Item>
                                    <Link to="/board">게시판</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to="/category">카테고리</Link>
                                </Menu.Item>
                            </Menu>
                        </div>
                        <div className="float-right mt-4 mb-3">
                            <Button type="primary" shape="round" className="w-28">로그인</Button>
                            <UnorderedListOutlined className="hidden" />
                        </div>
                    </div>

                    <div className="mt-3 float-right sm:hidden">
                        <UnorderedListOutlined className="py-3 px-3 hover:bg-gray-100 rounded-full transition duration-500 ease-in-out cursor-pointer" onClick={() => this.setState({ drawerOpen: !this.state.drawerOpen })} />
                    </div>
                </nav>
                <Drawer visible={this.state.drawerOpen} onClose={() => this.setState({ drawerOpen: !this.state.drawerOpen })}>
                    <Menu mode="vertical" className="border-0">
                        <Menu.Item>
                            <Link to="/board">게시판</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/category">카테고리</Link>
                        </Menu.Item>
                        <Divider className="border-gray-300 mb-3" />
                        <Button type="primary" shape="round" className="w-52">로그인</Button>
                    </Menu>
                </Drawer>
            </>
        )
    }
}

export default NavBar;
