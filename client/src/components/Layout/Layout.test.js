import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout component ', () => {
    it('renders without crash', () => {
        render(<Layout />);
    });
});
