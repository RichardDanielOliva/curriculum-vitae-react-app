import React from 'react';
import { connect } from 'react-redux';

const isASkillSelected = (skillSelected, skill) => {

    if (skillSelected.includes(skill)){
        return true;
    }

    return false;
}

const ProjectCard = (({title, urlRepository, description, tecnologies, comments, skills}) => (
    <table class="table table-bordered">
        <tbody>
            <tr>
                <td colspan="3">
                    <strong>Title:</strong> {title}
                </td>
                <td>
                    <strong>Repository:</strong> {urlRepository}
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <strong>Description:</strong>{description}
                </td>
                <td colspan="1" rowSpan="2">
                    <strong>Tecnologies:</strong> 
                        <ul>
                            {
                                tecnologies.map(({tecnologyName, skillAsociated})=>
                                    <li className={isASkillSelected(skills, skillAsociated) ? `text-strong` : ``}>{tecnologyName}</li>
                                )
                            }
                        </ul>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <strong>Comment:</strong>  {comments}
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    <strong>Preview:</strong> 
                </td>
            </tr>
        </tbody>    
    </table>
));

const mapStateToProps = state => ({
    skills: state.skill.skills
})

export default connect(mapStateToProps)(ProjectCard);