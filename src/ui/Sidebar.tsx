import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    grid-row: 1 / -1;
    background-color: var(--color-grey-0);
    border-right: 1px solid var(--color-grey-100);
    padding: 3.2rem 2.4rem;
`;

export default function Sidebar() {
    return (
        <StyledSidebar>
            <Logo />
            <MainNav />
        </StyledSidebar>
    );
}
