import React from 'react';
import Color from 'color';
import styled from '@emotion/styled';

import Breadcrumb, { BreadcrumbPropType } from './Breadcrumb';

const PageHeaderSection = styled.section`
    padding: 3.5vh 3.5vw;
    background: ${({ theme }) => theme?.isDarkTheme ? Color(theme.background || '#000').lighten(0.2).hex() : Color(theme.background || '#FFF').darken(0.15).hex() };
    p {
        font-size: calc(1rem + 0.25vw);
    }
`;

type PageHeader = {
    title?: string,
    customTitle?: React.ReactElement,
    description?: string,
    id?: string,
    className?: string,
    headingClassName?: string,
    breadcrumb?: BreadcrumbPropType,
    breadcrumbItems?: {
        link: string,
        title: string,
        isActive?: boolean
    }[],
    titleBottomRenderer?: () => (React.ReactChildren|React.ReactNode|React.ReactElement),
    sidebarRenderer?: () => (React.ReactChildren|React.ReactNode|React.ReactElement)
    customRender?: () => (React.ReactChildren|React.ReactNode|React.ReactElement),
}

const PageHeader = ({
    title, description, className = '', headingClassName = '', id,
    breadcrumbItems = [],
    customRender = () => <div />,
    titleBottomRenderer = () => <div />,
    sidebarRenderer = () => <div />,
    customTitle = null, breadcrumb = null
} : PageHeader) => (
    <PageHeaderSection id={id} className={`page-header ${className}`}>
        <div>
            <div className="flex flex-wrap">
                <div className="md:w-2/3 py-2">
                    <div className="px-2 mb-4">
                        <Breadcrumb
                            {...breadcrumb}
                            items={breadcrumbItems}
                        />
                    </div>
                    {customTitle ? customTitle : <h1 aria-level={1} className={`text-6xl mb-3 font-semibold ${headingClassName}`} role="heading">{title}</h1>}
                    {description?.length > 0 && <p className="text-lg opacity-80">{description}</p>}
                    {titleBottomRenderer()}
                </div>
                <div className="md:w-1/3 py-2 flex justify-end items-center">
                    {sidebarRenderer()}
                </div>
            </div>
            {customRender && customRender()}
        </div>
    </PageHeaderSection>
);

export default PageHeader;