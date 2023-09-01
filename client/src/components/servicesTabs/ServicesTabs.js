
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab, tabClasses } from '@mui/base/Tab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced, faLaptopFile, faVault } from "@fortawesome/free-solid-svg-icons";
import LawServices from '../Services/LawServices';
import ITServices from '../Services/ITServices';
import FinanceServices from '../Services/FinanceServices';

export default function ServicesTabs() {

  
  return (
    <Tabs defaultValue={1}>
      <StyledTabsList>
        <StyledTab value={1}>
        <FontAwesomeIcon icon={faScaleBalanced}/>
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
      <StyledTabPanel value={2}>
        <ITServices/>
      </StyledTabPanel>
      <StyledTabPanel value={3}>
        <FinanceServices/>
      </StyledTabPanel>
    </Tabs>
  );
}

const StyledTab = styled(Tab)`
font-family: 'IBM Plex Sans', sans-serif;
  color: #B3B3BA;
  cursor: pointer;
  font-size: 2.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 4.5;
  padding: 8px 12px;
  margin: 6px 0;
  border: none;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #B3B3BA;

  &.${tabClasses.selected} {
    color: #673AB7;
    border-bottom: 1px solid #673AB7;
  }

@media(min-width:768px){
  font-family: 'IBM Plex Sans', sans-serif;
  color: #B3B3BA;
  cursor: pointer;
  font-size: 3.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 4.5;
  padding: 8px 12px;
  margin: 6px 0;
  border: none;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #B3B3BA;

  &.${tabClasses.selected} {
    color: #673AB7;
    border-bottom: 1px solid #673AB7;
  }
}
`;

const StyledTabPanel = styled(TabPanel)`
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding-bottom: 10px;
  padding-top: 10px;

  @media(min-width:768px){
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding-bottom: 100px;
  }
`;

const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
  min-width: 320px;
  margin-bottom: 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  padding: 40px;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;

  @media(min-width:768px){
  min-width: 400px;
  margin-bottom: 40px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  padding: 80px;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  }
  `,
);
