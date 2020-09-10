// @flow strict
import * as React from 'react';
import { Link } from 'react-router';

import SectionComponent from 'components/common/Section/SectionComponent';
import { ReadOnlyFormGroup } from 'components/common';
import Routes from 'routing/Routes';

import type { LdapService } from '../types';

type Props = {
  authenticationService: LdapService,
};

const UserSyncSection = ({ authenticationService }: Props) => {
  const { userSearchBase, userSearchPattern, displayNameAttribute } = authenticationService.config;
  const editLink = {
    pathname: Routes.SYSTEM.AUTHENTICATION.PROVIDERS.edit(authenticationService.id),
    query: {
      step: 'serverConfig',
    },
  };

  return (
    <SectionComponent title="User Synchronisation" headerActions={<Link to={editLink}>Edit</Link>}>
      <ReadOnlyFormGroup label="Search Base DN" value={userSearchBase} />
      <ReadOnlyFormGroup label="User Search Pattern" value={userSearchPattern} />
      <ReadOnlyFormGroup label="Display Name Attribute" value={displayNameAttribute} />
    </SectionComponent>
  );
};

export default UserSyncSection;