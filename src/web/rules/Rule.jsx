import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { PageHeader } from 'components/common';
import DocumentationLink from 'components/support/DocumentationLink';

import DocsHelper from 'util/DocsHelper';

import RuleForm from './RuleForm';
import RuleHelper from './RuleHelper';

const Rule = React.createClass({
  propTypes: {
    rule: React.PropTypes.object,
    create: React.PropTypes.bool,
    onSave: React.PropTypes.func.isRequired,
    validateRule: React.PropTypes.func.isRequired,
    history: React.PropTypes.object.isRequired,
  },

  render() {
    let title;
    if (this.props.create) {
      title = 'Create pipeline rule';
    } else {
      title = <span>Pipeline rule <em>{this.props.rule.title}</em></span>;
    }

    return (
      <div>
        <PageHeader title={title} titleSize={9} buttonSize={3}>
          <span>
            Rules are a way of applying changes to messages in Graylog. A rule consists of a condition and a list{' '}
            of actions.{' '}
            Graylog evaluates the condition against a message and executes the actions if the condition is satisfied.
          </span>

          <span>
            Read more about Graylog pipeline rules in the <DocumentationLink page={DocsHelper.PAGES.PIPELINE_RULES}
                                                                             text="documentation" />.
          </span>

          <span>
            <LinkContainer to="/system/pipelines/rules">
              <Button bsStyle="info">Manage rules</Button>
            </LinkContainer>
            &nbsp;
            <LinkContainer to="/system/pipelines/overview">
              <Button bsStyle="info">Manage pipelines</Button>
            </LinkContainer>
          </span>
        </PageHeader>

        <Row className="content">
          <Col md={6}>
            <RuleForm rule={this.props.rule} create={this.props.create} onSave={this.props.onSave}
                      validateRule={this.props.validateRule} history={this.props.history} />
          </Col>
          <Col md={5} mdOffset={1}>
            <RuleHelper />
          </Col>
        </Row>
      </div>
    );
  },
});

export default Rule;
