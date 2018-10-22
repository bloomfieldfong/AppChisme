import React from 'react';
import { connect } from 'react-redux';
import ChismeList from '../ChismeList';
import ChismeForm from '../ChismeForm';

const ChismeApp = () => (
    <div className="chismeApp">
    <h1>
      {'LOS CHISMES MAS SOBROSOS'}
    </h1>
    <h2>
      {'Chismes Recientes: '}
    </h2>
    <ChismeList/>
    <h2>
      {'Cree un nuevo chisme:'}
    </h2>
    <ChismeForm/>
    <h2>
      { '                                                                                                                                  ' }
    </h2>
    <h2>
      {'Noticias de Chismes:'}
    </h2>

  </div>
);



export default ChismeApp;
