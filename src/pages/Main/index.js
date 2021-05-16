import React from "react";
import FolderLayout from "../../components/FolderLayout";
import Folder from "../../components/Folder";
import { folderList } from "../../utils/mockData";
import "../../styles/Main.css";

const Main = () => {
    return (
        <div className="background">
            <h1 style={{ margin: 0 }}>고양이 사진첩</h1>
            <FolderLayout>
                {folderList.map((el, idx) => (
                    <Folder key={idx} title={el.title} />
                ))}
            </FolderLayout>
        </div>
    );
};

export default Main;
