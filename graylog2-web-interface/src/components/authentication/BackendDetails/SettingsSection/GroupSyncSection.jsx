// @flow strict
import * as React from 'react';
import styled from 'styled-components';
import { PluginStore } from 'graylog-web-plugin/plugin';
import { Link } from 'react-router';

import SectionComponent from 'components/common/Section/SectionComponent';
import Routes from 'routing/Routes';

import type { LdapService } from '../../ldap/types';

type Props = {
  authenticationBackend: LdapService,
};

const Header = styled.h4`
  margin-bottom: 5px;
`;

const NoEnterpriseComponent = () => (
  <>
    <Header>No enterprise plugin found</Header>
    <p>To use the <b>Groups</b> functionality you need to install the Graylog <b>Enterprise</b> plugin.</p>
  </>
);

const GroupSyncSection = ({ authenticationBackend }: Props) => {
  const authenticationPlugin = PluginStore.exports('authenticationServices.ldap');
  const editLink = {
    pathname: Routes.SYSTEM.AUTHENTICATION.PROVIDERS.edit(authenticationBackend.id),
    query: {
      step: 'groupSync',
    },
  };

  const Section = ({ children }: { children: React.Node }) => (
    <SectionComponent title="Group Synchronisation" headerActions={<Link to={editLink}>Edit</Link>}>
      {children}
    </SectionComponent>
  );

  if (!authenticationPlugin || authenticationPlugin.length <= 0) {
    return (
      <Section>
        <NoEnterpriseComponent />
      </Section>
    );
  }

  const { GroupSyncDetails } = authenticationPlugin[0];

  return (
    <Section>
      <GroupSyncDetails authenticationBackend={authenticationBackend} />
    </Section>
  );
};

export default GroupSyncSection;