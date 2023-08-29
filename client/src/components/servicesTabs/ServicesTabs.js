
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab, tabClasses } from '@mui/base/Tab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced, faLaptopFile, faVault } from "@fortawesome/free-solid-svg-icons";
import LawServices from '../Services/LawServices';

export default function ServicesTabs() {
  return (
    <Tabs defaultValue={1}>
      <StyledTabsList>
        <StyledTab value={1}>
        <FontAwesomeIcon icon={faScaleBalanced} size='lg'/>
        </StyledTab>
        <StyledTab value={2}>
        <FontAwesomeIcon icon={faLaptopFile} />
            </StyledTab>
        <StyledTab value={3}>
        <FontAwesomeIcon icon={faVault} />
        </StyledTab>
      </StyledTabsList>
      <StyledTabPanel value={1}>
        <LawServices/>
      </StyledTabPanel>
      <StyledTabPanel value={2}>Second page</StyledTabPanel>
      <StyledTabPanel value={3}>Third page</StyledTabPanel>
    </Tabs>
  );
}

const StyledTab = styled(Tab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: black;
  cursor: pointer;
  font-size: 3.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 4.5;
  padding: 8px 12px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &.${tabClasses.selected} {
    color: white;
  }
`;

const StyledTabPanel = styled(TabPanel)`
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
  min-width: 400px;
  margin-bottom: 60px;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  padding: 80px;
  background-image: linear-gradient(to right, #673AB7 0%, #512DA8 51%, #673AB7 100%);
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  `,
);
