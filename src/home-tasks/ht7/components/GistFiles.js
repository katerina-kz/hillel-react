import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchGistsUrl} from "../redux/actions/files";
import  SyntaxHightlighter from 'react-syntax-highlighter'
import {Redirect} from "react-router-dom";
import {Loader, Header} from "semantic-ui-react";
import {getSelectedGistById} from "../redux/selectors/gists";
import {getFilesById, getFilesLoader} from "../redux/selectors/files";

function GistFiles() {
    const { gistId } = useParams();
    const selectedGist = useSelector(state => getSelectedGistById(state, gistId));
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedGist) {
            dispatch(fetchGistsUrl({files: selectedGist.files, gistId}))
        }
    }, [selectedGist, gistId]);


    const files = useSelector(state => getFilesById(state, gistId));
    const loader = useSelector(getFilesLoader);

    if (!selectedGist) {
        return <Redirect to="/" />
    }

    return (
        <>
            {   loader ?
                <Loader active inline='centered'/>
                : <div>

                    {
                        files.map(file => (
                                <div>
                                    <div>
                                        <Header as='h2'>{file.filename}</Header>

                                    </div>
                                    <div>
                                        <SyntaxHightlighter language={file.language && file.language.toLocaleLowerCase()}>
                                            {file.filesScript}
                                        </SyntaxHightlighter>
                                    </div>

                                </div>
                            )
                        )
                    }
                </div>
            }

        </>
    );
}

export default GistFiles;